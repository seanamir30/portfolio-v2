import React from 'react'
import Card from '../../Card'

const DefinitelyAnotherBlogApp = () => {
  const projectLinks = {
    github: 'https://github.com/seanamir30/another-blog',
    external: 'https://anotherblogapp.seancafe.com/',
  }
  return (
    <Card.Container className="bg-[#0f172a]">
      <div className="text-5xl">
          Definitely Another
          <div className="text-orange-400">Blog App</div>
      </div>
      <p>
        A blog app wherein blogs posted from your current device are only saved there, other users on other device can&apos;t see it.
      </p>
      <Card.Footer github={projectLinks.github} external={projectLinks.external} />
    </Card.Container>
  )
}
export default DefinitelyAnotherBlogApp