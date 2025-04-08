const sdk = (window).RB_SDK
const url = new URL(location.href)
url.pathname = "/play"
const homeUrl = url.toString()

function ShortDrama() {

  const handleClick = () => {
    sdk.toChrome(homeUrl)
  }


  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-[#111] p-5 rounded-xl max-w-md w-full">
        <div className="relative mx-auto">
          <img src="/video/cover.jpg" alt="封面图" className="w-full rounded-lg" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-t-[8px] border-b-[8px] border-l-white border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        <div className="text-lg font-bold mt-4 text-white">她带崽离开后，厉总追疯了</div>
        <div className="text-sm text-gray-400 mt-1 mb-4">不要直到失去才想起来珍惜！</div>
        <div className="inline-block bg-[#444] text-white px-3 py-1 rounded-full text-xs mb-4">时霖</div>
        <br />
        <button
          id="play-btn"
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-[#ff00cc] to-[#ff3366] text-white px-6 py-3 rounded-full text-base font-bold hover:opacity-90 transition-opacity text-white"
        >
          ▶ 立即播放
        </button>
      </div>
    </div>
  )
}

export default ShortDrama 