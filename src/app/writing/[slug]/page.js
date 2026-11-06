import { permanentRedirect } from 'next/navigation'

export default function LegacyWritingArticlePage({ params }) {
  permanentRedirect(`/experience/${params.slug}`)
}
