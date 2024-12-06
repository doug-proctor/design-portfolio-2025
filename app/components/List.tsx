export default function List({ items } : { items: any }) {
  return (
    <ul>
      {items.map((item: any) =>
        <li key={item} className="ml-24 list-disc">{item}</li>
      )}
    </ul>
  )
}