import * as React from "react"

import styles from './Loader.module.css'

const Spinner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      display: "block",
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx={77} cy={50} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.6111111111111112s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.6111111111111112s"
      />
    </circle>
    <circle cx={73.383} cy={63.5} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.5555555555555556s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.5555555555555556s"
      />
    </circle>
    <circle cx={63.5} cy={73.383} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.5s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.5s"
      />
    </circle>
    <circle cx={50} cy={77} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.4444444444444444s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.4444444444444444s"
      />
    </circle>
    <circle cx={36.5} cy={73.383} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.3888888888888889s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.3888888888888889s"
      />
    </circle>
    <circle cx={26.617} cy={63.5} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.3333333333333333s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.3333333333333333s"
      />
    </circle>
    <circle cx={23} cy={50} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.2777777777777778s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.2777777777777778s"
      />
    </circle>
    <circle cx={26.617} cy={36.5} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.2222222222222222s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.2222222222222222s"
      />
    </circle>
    <circle cx={36.5} cy={26.617} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.16666666666666666s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.16666666666666666s"
      />
    </circle>
    <circle cx={50} cy={23} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.1111111111111111s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.1111111111111111s"
      />
    </circle>
    <circle cx={63.5} cy={26.617} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="-0.05555555555555555s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="-0.05555555555555555s"
      />
    </circle>
    <circle cx={73.383} cy={36.5} fill="#a3a3cc" r={5}>
      <animate
        attributeName="r"
        values="3;3;5;3;3"
        dur="0.6666666666666666s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="fill"
        values="#a3a3cc;#a3a3cc;#7474a6;#a3a3cc;#a3a3cc"
        repeatCount="indefinite"
        dur="0.6666666666666666s"
        begin="0s"
      />
    </circle>
  </svg>
)

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <Spinner />
    </div>
  )
}

export default Loader
