// Tillfalligt test: kor agenternas sida mot bryggan (ingen riktig Telegram kopplad).
import { buildNotice, notifyAssistant } from './core/assistant.js'
import { allPersonas } from './personas/index.js'
import { loadEnv } from './core/env.js'

loadEnv()

const persona = allPersonas[0]
const mail = {
  mailbox: persona.address,
  uid: 4242,
  from: 'test@example.com',
  fromName: 'Test Testsson',
  to: persona.address,
  replyTo: null,
  subject: 'Test av mobilnotis',
  text: 'Hej, jag vill bestalla ett penetrationsprov. Mitt personnummer ar 19900101-1234 ifall det behovs.',
  attachments: [],
  messageId: '<test@example.com>',
  references: [],
  date: new Date(),
  isAutomated: false,
  authResults: null,
}

const ok = await notifyAssistant(
  buildNotice('escalation', persona, mail, 'Test: eskalerar till agaren', 'Kunden vill ha ett penetrationsprov.'),
)
console.log('notifyAssistant ->', ok)
