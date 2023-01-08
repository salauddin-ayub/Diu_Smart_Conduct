import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
        <ScrollToTop className="-mr-5 -mb-6 z-40 text-bold"
      
      smooth
      viewBox="20 -110 50 500"
      style={{
        backgroundColor: "#61dafb",
        textAlign: "center",
        textLeft: "2px",
        font:"bold"
        
      }}
      top="120"
      color="white"
    />
        <div class="text-xs font-medium text-gray-500">
  <div class="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 py-16 md:grid-cols-5">
    <nav class="col-span-2 md:col-span-1">
      <a href="#">
        <svg class="h-6" viewBox="0 0 19 21">
          <path
            class="fill-rose-600"
            d="M9.45569.11334C9.33771.0392836 9.20123 0 9.06194 0c-.1393 0-.27577.0392836-.39375.11334-.94292.60914-1.81132 1.32652-2.5875 2.1375-1.725 1.79062-2.64375 3.74062-2.64375 5.625 0 1.49184.59263 2.92256 1.64752 3.97746 1.05489 1.0549 3.97748 1.6475 3.97748 1.6475s2.92256-.5926 3.97746-1.6475c1.0549-1.0549 1.6475-2.48562 1.6475-3.97746 0-4.49063-5.01559-7.63125-5.23121-7.7625ZM9.06194 12.0008c-.29582.0013-.58896-.0561-.86251-.1687-.27354-.1126-.52207-.2783-.73125-.4875-.20918-.2092-.37486-.4577-.4875-.7313-.11263-.2735-.16998-.5666-.16874-.86246 0-2.25 2.25-3.75 2.25-3.75s2.24996 1.5 2.24996 3.75c.0013.29586-.0561.58896-.1687.86246-.1126.2736-.2783.5221-.4875.7313-.2092.2092-.4577.3749-.73126.4875-.27354.1126-.56668.17-.8625.1687Zm8.96246 6.975c-.0477.1518-.1424.2845-.2705.3788-.1281.0944-.2829.1456-.442.1462-.0766.0014-.1529-.0113-.225-.0375l-8.02496-2.55-8.025 2.55c-.072085.0262-.148343.0389-.225003.0375-.159092-.0006-.313864-.0518-.441943-.1462-.128079-.0943-.22283-.227-.2705568-.3788-.0304549-.0935-.0419719-.1922-.0338781-.2902.0080939-.098.0356359-.1935.0810189-.2807.045383-.0873.107697-.1647.183304-.2276.075607-.0629.162993-.1102.257055-.139l6.000003-1.9125-6.000003-1.9125c-.101479-.0226-.197151-.066-.280941-.1276-.08379-.0615-.153868-.1398-.205786-.2299-.0519183-.0901-.0845418-.19-.09579985-.2933-.01125803-.1034-.00090453-.2079.03040305-.3071.0313075-.0991.0828848-.1907.1514588-.2688.068574-.0781.152646-.1412.246879-.1851.094233-.0439.196569-.0678.30051-.07.103942-.0023.20722.0171.303279.0568l8.025 2.55 8.02496-2.55c.0961-.0397.1994-.0591.3033-.0568.104.0022.2063.0261.3005.07.0943.0439.1783.107.2469.1851.0686.0781.1202.1697.1515.2688.0313.0992.0416.2037.0304.3071-.0113.1033-.0439.2032-.0958.2933-.052.0901-.122.1684-.2058.2299-.0838.0616-.1795.105-.281.1276l-6 1.9125 6 1.9125c.0941.0288.1815.0761.2571.139.0756.0629.1379.1403.1833.2276.0454.0872.0729.1827.081.2807.0081.098-.0034.1967-.0339.2902Z" />
        </svg>
      </a>
    </nav>
    <nav class="flex flex-col items-start space-y-2.5 md:space-y-1.5">
      <h3 class="mb-2 text-black">Products</h3>
      <a href="#" class="transition hover:text-gray-900">Todo List</a>
      <a href="#" class="transition hover:text-gray-900">Product Management</a>
      <a href="#" class="transition hover:text-gray-900">Git Manager</a>
      <a href="#" class="transition hover:text-gray-900">Status Reporter</a>
      <a href="#" class="transition hover:text-gray-900">Email Management</a>
      <a href="#" class="transition hover:text-gray-900">Responsibilities</a>
      <a href="#" class="transition hover:text-gray-900">Teams</a>
    </nav>
    <nav class="flex flex-col items-start space-y-2.5 md:space-y-1.5">
      <h3 class="mb-2 text-black">Resources</h3>
      <a href="#" class="transition hover:text-gray-900">Technical Support</a>
      <a href="#" class="transition hover:text-gray-900">Licensing</a>
      <a href="#" class="transition hover:text-gray-900">Community</a>
      <a href="#" class="transition hover:text-gray-900">Knowledge Base</a>
      <a href="#" class="transition hover:text-gray-900">Marketplace</a>
      <a href="#" class="transition hover:text-gray-900">My Account</a>
      <a href="#" class="transition hover:text-gray-900">Support Ticket</a>
    </nav>
    <nav class="flex flex-col items-start space-y-2.5 md:space-y-1.5">
      <h3 class="mb-2 text-black">Learn</h3>
      <a href="#" class="transition hover:text-gray-900">Certification</a>
      <a href="#" class="transition hover:text-gray-900">Partners</a>
      <a href="#" class="transition hover:text-gray-900">Documentation</a>
      <a href="#" class="transition hover:text-gray-900">Developer Resources</a>
      <a href="#" class="transition hover:text-gray-900">Purchasing FAQ</a>
      <a href="#" class="transition hover:text-gray-900">Enterprise services</a>
    </nav>
    <nav class="flex flex-col items-start space-y-2.5 md:space-y-1.5">
      <h3 class="mb-2 text-black">About Us</h3>
      <a href="#" class="transition hover:text-gray-900">Company</a>
      <a href="#" class="transition hover:text-gray-900">Careers</a>
      <a href="#" class="transition hover:text-gray-900">Events</a>
      <a href="#" class="transition hover:text-gray-900">Blogs</a>
      <a href="#" class="transition hover:text-gray-900">Contact</a>
      <a href="#" class="transition hover:text-gray-900">Security</a>
      <a href="#" class="transition hover:text-gray-900">Privacy</a>
    </nav>
  </div>
</div>
      
    </div>
  )
}

export default Footer
