import Container from '@/components/Container';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container className='flex items-center justify-center py-20'>
      <div className='max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-4xl font-bold text-center'>No se ha encontrado la página</h2>
        <p className='text-base font-medium text-center'>Ops! Parece que la página que estás buscando no existe...</p>
        <Link href={'/'} className='flex items-center border-[1px] border-black hover:bg-black hover:text-white justify-center w-44 h-12 rounded-full text-base font-semibold cursor-pointer duration-200'>
          Volver al inicio
        </Link>
      </div>
    </Container>
  )
}

export default NotFoundPage