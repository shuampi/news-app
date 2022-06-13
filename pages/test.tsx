interface TestProps{
    news:any
}

function Test({news}:TestProps) {
    console.log('breakNews :>> ', news);
  return (
    <div>Test
        
    </div>
  )
}

export default Test