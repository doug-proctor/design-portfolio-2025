import Avatar from "@/app/components/Avatar"
import H1 from "@/app/components/H1"

export default function Component({ title } : { title: string }) {
  return (
    <header className="space-y-24 text-center">
      <Avatar />
      <div className="space-y-8">
        <H1>{title}</H1>
        <h2 className="text-24 font-medium text-foreground-secondary">
          <span className="text-[white] font-bold px-4" style={{
            "background": "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          }}>Lead Product Designer</span>
        </h2>
      </div>
    </header>
  )
}