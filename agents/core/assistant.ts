/**
 * Notis till agarens mobil via Telegram-bryggan.
 *
 * Bryggan ligger i EntropicAssistant/telegram-bridge och kor som en egen liten
 * tjanst pa http://127.0.0.1:8791 (ASSISTANT_URL). Den ar den enda platsen dar
 * bot-token finns — agenterna skickar bara ett litet JSON-objekt.
 *
 * Allt har ar best-effort: ar bryggan nere eller natet trasigt ska mejlflodet
 * anda fungera. Felet loggas och inget mer hander.
 */
import { envValue } from './env.js'
import type { IncomingMail, Persona } from './types.js'

/** Samma falt som bryggan forvantar sig (se telegram-bridge/src/format.ts). */
export interface AssistantNotice {
  kind: 'escalation' | 'copy' | 'notify'
  personaId: string
  persona: string
  mailbox: string
  from: string
  fromName?: string
  subject?: string
  date?: string
  uid?: number
  reason?: string
  summary?: string
  excerpt?: string
  source?: string
}

/** Hur mycket av kundens mejl som far folja med — bryggan kortar sedan ned. */
const MAX_EXCERPT_CHARS = 1500
const TIMEOUT_MS = 5_000

/** Ar en brygga konfigurerad? Utan URL gors ingenting. */
export function assistantConfigured(): boolean {
  return Boolean(envValue('ASSISTANT_URL'))
}

/** Bygger notisen fran ett mejl + personan. */
export function buildNotice(
  kind: AssistantNotice['kind'],
  persona: Persona,
  mail: IncomingMail,
  reason: string,
  summary?: string,
): AssistantNotice {
  return {
    kind,
    personaId: persona.id,
    persona: persona.name,
    mailbox: persona.address,
    from: mail.from,
    fromName: mail.fromName || undefined,
    subject: mail.subject || undefined,
    date: mail.date.toISOString(),
    uid: mail.uid,
    reason,
    summary: summary?.trim() || undefined,
    excerpt: (mail.text || '').slice(0, MAX_EXCERPT_CHARS),
  }
}

/**
 * Skickar notisen. Returnerar false om bryggan inte svarade — anroparen
 * behover inte gora nagot sarskilt, agaren far anda eskaleringen per mejl.
 */
export async function notifyAssistant(notice: AssistantNotice): Promise<boolean> {
  const base = envValue('ASSISTANT_URL')
  if (!base) return false

  let url: URL
  try {
    url = new URL('/escalation', base)
  } catch {
    console.warn(`[agent] ASSISTANT_URL ar inte en giltig adress: ${base}`)
    return false
  }

  const token = envValue('ASSISTANT_TOKEN')
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(token ? { 'x-bridge-token': token } : {}),
      },
      body: JSON.stringify(notice),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    // 202 = bryggan tog emot notisen men Telegram svarade inte; den ligger i kon.
    return response.ok || response.status === 202
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn(`[agent] kunde inte na Telegram-bryggan (${url.href}): ${message}`)
    return false
  }
}
