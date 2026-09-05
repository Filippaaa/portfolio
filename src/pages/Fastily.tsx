import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function Fastily() {
  return (
    <div className="relative mt-[100px] mb-5">
      
      <Link
        to="/"
        className="absolute -left-12 top-1"
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
      </Link>

      <h1 className="page-title">fastily</h1>

      <p className="text-justify pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet diam semper tempor tincidunt. Proin ligula odio, congue a eros id, laoreet viverra mauris. Nullam sed elit eu orci euismod semper at at erat. Aliquam at sem urna. Fusce maximus scelerisque augue, a dignissim sapien varius sit amet. Donec gravida metus ac mollis cursus. Pellentesque molestie, mauris at mattis interdum, lectus metus accumsan sapien, sed fringilla leo lorem sed ex. Ut quis placerat dolor. Phasellus nec nisl sed lectus hendrerit malesuada.

In dictum convallis est, quis tristique metus. Nunc ut velit convallis, posuere turpis ut, rutrum lacus. Integer a purus posuere, vehicula nibh quis, finibus ipsum. Fusce rutrum, risus vel congue auctor, urna magna ultrices urna, feugiat scelerisque metus lorem quis lectus. In augue nisi, convallis sit amet massa quis, dignissim aliquam nisi. Nam ultrices convallis libero. Sed gravida sem sit amet metus efficitur, quis tempor ligula faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in fermentum leo. Aenean malesuada, est a cursus sodales, odio eros ultrices leo, eget facilisis risus arcu ac turpis. Aenean suscipit malesuada nunc, quis tincidunt erat imperdiet at. Cras ultrices blandit nunc a dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

</p>

    </div>
  )
}

export default Fastily