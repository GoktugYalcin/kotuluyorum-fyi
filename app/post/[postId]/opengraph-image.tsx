import { ImageResponse } from 'next/og'
import contentful from '@/lib/contentful'

export const alt = 'Kötülüyorum.fyi'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

// Image generation
export default async function Image({
  params
}: {
  params: { postId: string }
}) {
  const post = await contentful.getPostById(params.postId)
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white'
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontSize: 30
            }}
          >
            ✍🏼
          </span>
          <span
            style={{
              marginLeft: 8,
              fontSize: 20
            }}
          >
            Kötülüyorum.fyi
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 25px',
            margin: '0 42px',
            fontSize: 40,
            width: '100%',
            maxWidth: 550,
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            lineHeight: 1.4
          }}
        >
          {post?.fields.title ?? 'Post not found :('}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size
    }
  )
}
