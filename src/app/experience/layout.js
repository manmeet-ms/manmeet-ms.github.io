import { SideMenu } from '@/components/side-menu'
import { ExperienceListLayout } from '@/components/experience-list-layout'
import { EXPERIENCE_POSTS } from '@/lib/experience-posts'

export default function ExperienceLayout({ children }) {
  return (
    <>
      <SideMenu title="Experience" isInner>
        <ExperienceListLayout list={EXPERIENCE_POSTS} />
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}