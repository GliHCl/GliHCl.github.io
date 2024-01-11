import { Conversation, Conversations } from "@/app/evia/conversation/page"

export function getConvoKeys(): string[] {
  const keys: string[] = []
  let idx = 0
  while (true) {
    const item = window.localStorage.key(idx)
    if (item) {
      idx++
      keys.push(item)
    } else return keys.filter(s => /conversation-\w+$/.test(s))
  }
}

export function getConversations(): Conversations {
  if (!window.localStorage) return []
  const keys = getConvoKeys()
  return keys
    .map(key => {
      return JSON.parse(
        window.localStorage.getItem(key) ?? "null"
      ) as Conversation
    })
    .filter(c => c && c.id && c.messages && c.messages.length)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getConvoFromID(id: string): Conversation {
  if (!window.localStorage)
    return {
      id,
      date: new Date().toISOString(),
      messages: [],
    }
  return (
    JSON.parse(window.localStorage.getItem(`conversation-${id}`) ?? "null") ?? {
      id,
      date: new Date().toISOString(),
      messages: [],
    }
  )
}
