import Image from 'next/image'

const myLoader = ({ src }) => {
  return `https://imgur.com/${src}`
}

export default GPDHero = (props) => {
  return (
    <Image
      loader={myLoader}
      src="2vId8JN"
      alt="GPD Hero"
      width={1500}
      height={1500}
    />
  )
}