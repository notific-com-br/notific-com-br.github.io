import Categories from '../components/categories'
import { DateFormat } from '../src/molecules'

import { Typography, Box } from '@material-ui/core'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  const image = <img src={coverImage?.sourceUrl} style={{ maxWidth: '50%' }} />

  return (
    <>
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Typography variant="h6" align="center">
        Escritp por <strong>{name}</strong> dia <DateFormat dateString={date} />
      </Typography>
      <Typography variant="body1" align="center">
        <Categories categories={categories} />
      </Typography>
      <Box display="flex" justifyContent="center">
        {image}
      </Box>
    </>
  )
}
