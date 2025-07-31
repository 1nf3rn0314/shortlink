import Link from 'next/link'

const Contact = () => {
  return (
    <div className='p-35 text-3xl'>
      <div className='text-4xl'>Contact:</div><br/>
      Saptarshi Nanda (<code><Link href='mailto:saptarshinanda@outlook.com'>saptarshinanda@outlook.com</Link></code>)<br/>
      <code><Link href='https://github.com/1nf3rn0314'>GitHub</Link></code><br/>
      <code><Link href='https://www.linkedin.com/in/saptarshi-nanda/'>LinkedIn</Link></code>
    </div>
  )
}

export default Contact
