import { type NextPage } from 'next'
import Head from 'next/head'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

import { CommunityHubFloatIconGroup } from './icons'

const title = <div>Nervos Community Hub.</div>
const description = `Nervos is a community-driven project that abides by the cypherpunk values of openness and decentralization across all verticals. If you're passionate about crypto and continually seeking to improve the status quo, Nervos is the perfect place to be.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit', avatar: 'https://avatars.githubusercontent.com/u/22511289?s=96&v=4' }

const InvolvedItem = ({
  titleLink: { label, url },
  description,
}: {
  titleLink: { label: string; url: string }
  description: string
}) => (
  <>
    <StyledLink isIconed isSpaced linkData={{ label, url }} className={styles.involvedItemLink} />
    <div>{description}</div>
  </>
)

const involvedList = [
  // meetups is inactive temporarily
  // {
  //   label: 'Nervos Meetups',
  //   url: 'https://www.meetup.com/pro/nervos-community/',
  //   description:
  //     'Join Nervos meet-ups around the world! We love bringing our community together and regularly host meet-ups, or you can host your own in your neighborhood – just let us know.',
  // },
  {
    label: 'Nervos Talk',
    url: 'https://talk.nervos.org/',
    description: 'Participate and discuss technical developments on Nervos.',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/NervosNetwork',
    description: 'Stay up to date with the latest news and updates in our ecosystem.',
  },
  {
    label: 'Discord',
    url: 'https://discord.gg/FKh8Zzvwqa',
    description: 'Connect with Nervos core developers and contributors.',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/NervosNetwork',
    description: 'Become a part of our vibrant community of meme connoisseurs.',
  },
  {
    label: 'Reddit',
    url: 'https://www.reddit.com/r/NervosNetwork/',
    description: 'Participate in regular AMAs with Nervos project developers.',
  },
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/c/NervosNetwork',
    description: 'Listen to podcasts and interviews with Nervos core and project developers.',
  },
]

const functions = [
  {
    title: 'Community Fund DAO.',
    tags: ['GRANTS', 'ECOSYSTEM', 'DAO'],
    content: (
      <>
        Apply for grants through the Community Fund DAO, Nervos’ ecosystem fund that supports community members
        organizing events, producing content, and building on Common Knowledge Base.
      </>
    ),
  },
  {
    title: 'Requests For Comment.',
    tags: ['COMMUNITY', 'COMMENTS', 'CONTRIBUTION'],
    content: (
      <>
        Influence the development direction of the Nervos network through the open, community-driven RFC process. Learn
        more about it&nbsp;
        <StyledLink
          linkData={{
            label: 'here',
            url: 'https://github.com/nervosnetwork/rfcs',
          }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        .
      </>
    ),
  },
  {
    title: 'Get Involved.',
    tags: ['MEETUPS', 'SOCIAL', 'CHAT', 'CONTRIBUTE'],
    content: (
      <div>
        {involvedList.map(({ label, url, description }, index) => (
          <div className={styles.involvedItemsWrap} key={index}>
            <InvolvedItem titleLink={{ label, url }} description={description} />
          </div>
        ))}
      </div>
    ),
  },
]

const Community: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <CommunityHubFloatIconGroup />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Community</title>
      </Head>
      <Page className={clsx(presets.themeDark)}>
        <BaseSeparatePage
          embellishedElements={[
            { content: <EmbellishedLeft width={940} height={503} />, top: 64, right: -204 },
            {
              content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
              top: 478,
              left: 344,
            },
          ]}
          editLink="https://github.com/Magickbase/nervos-official-website/blob/develop/src/pages/community/index.page.tsx"
          title={title}
          floatIcons={floatIcons}
          description={description}
          info={info}
          editor={editor}
          functions={functions}
        />
      </Page>
    </>
  )
}

export default Community
