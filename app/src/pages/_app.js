// import '@/styles/globals.css'
import '@/css/bootstrap.min.css'
import '@/css/miclase.css'
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient(); //Objeto queryClient gobal para toda la aplicacion

export default function App({ Component, pageProps }) {
  return(

    <QueryClientProvider client={queryClient}> 
     <Component {...pageProps} />
    </QueryClientProvider>
    
    )
}
