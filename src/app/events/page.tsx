import { wpFetchEvents } from "@/lib/apollo/fetch/events/events";

export default async function EventsPage() {
  const result = await wpFetchEvents()
  return <main>test</main>;
}
