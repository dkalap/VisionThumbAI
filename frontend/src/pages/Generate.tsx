import { useState } from "react";
import { useParams } from "react-router-dom"
import { type IThumbnail, type AspectRatio, colorSchemes, type ThumbnailStyle} from "../assets/assets";
import SoftBackDrop from "../components/SoftBackDrop";
import AspectRatioSelector from "../components/AspectRatioSelector";


const Generate = () => {
  const {id} = useParams();
  const [title, setTitle] = useState('')
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [thumbnail, setThumbnail] = useState<IThumbnail | null >(null)
  const [loading, setLoading] = useState(false)

  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9')
  const [colorSchemeId, setcolorSchemeId] = useState<string>(colorSchemes[0].id)
  const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic')

  const [styleDropdownOpen, setstyleDropdownOpen] = useState(false)
  


  return (
    <>
      <SoftBackDrop/>
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
            <div className="grid lg:grid-cols-[400px_1fr] gap-8">
              {/*left panel*/}
              <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
                <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-100">Create Your Thumbnail</h2>
                    <p className="text-sm text-zinc-400">Describe your vision and let AI bring it to life</p>
                  </div>
                  <div className="space-y-5">
                    {/*TITLE INPUT*/}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Topic or Title</label>
                      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} maxLength={100} placeholder="e.g., 10 Tips for Better Sleep" className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
                      <div className="flex justify-end">
                        <span className="text-xs text-zinc-400">{title.length}/100</span>
                      </div>
                    </div>
                    {/*AspectRatioSelector*/}
                    <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio}/>
                    {/* StyleSelector*/}
                    {/* ColorSchemeSelector*/}
                    {/* details*/}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Additional Prompts <span className="text-zinc-400 text-xs">(optional)</span>
                      </label>
                      <textarea value={additionalDetails} onChange={(e)=>setAdditionalDetails(e.target.value)} rows={3}
                        placeholder="Add any specific elements, mood, or style preferences..." className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"/>
                    </div>

                  </div>
                  {/*button*/}
                  {!id && (
                    <button className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors">
                      {loading ? 'Generating...': 'Generate Thumbnail'}
                    </button>
                  )}
                </div>
              </div>
              {/*right panel*/}
              <div></div>
            </div>
        </main>

      </div>
    </>
  )
}

export default Generate