import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }}>
      <Component {...pageProps} />
    </div>
  )
}
