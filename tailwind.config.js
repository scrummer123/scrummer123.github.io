const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1.075rem",
      lg: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        indigo: {
          1000: "#080520",
          navbar: "rgba(8,5,32,.97)",
          navbarGradient: "rgba(8,5,32,.55)",
          navbarLight: "rgba(255,255,255,.55)",
        },
      },
      fontFamily: {
        rewind: ["Daddy Rewind"],
        nunito: ["Nunito Bold"],
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        5: "5 5 0%",
        6: "6 6 0%",
      },
      height: {
        "1vh": "1vh",
        "2vh": "2vh",
        "3vh": "3vh",
        "4vh": "4vh",
        "6vh": "6vh",
        "8vh": "8vh",
        "10vh": "10vh",
        "12vh": "12vh",
        "14vh": "14vh",
        "16vh": "16vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  corePlugins: {
    preflight: true, // Tailwind's base/reset styles
    container: true, // The container component
    accessibility: false, //	The sr-only and not-sr-only utilities
    alignContent: false, // The align-content utilities like content-end
    alignItems: true, //	The align-items utilities like items-center
    alignSelf: true, //	The align-self utilities like self-end
    animation: true, //	The animation utilities like animate-none
    appearance: false, //	The appearance utilities like appearance-none
    backgroundAttachment: false, //	The background-attachment utilities like bg-local
    backgroundClip: false, //	The background-clip utilities like bg-clip-padding
    backgroundColor: true, //	The background-color utilities like bg-green-700
    backgroundImage: true, //	The background-image utilities like bg-gradient-to-br
    backgroundOpacity: true, //	The background-color opacity utilities like bg-opacity-25
    backgroundPosition: true, //	The background-position utilities like bg-left-top
    backgroundRepeat: true, //	The background-repeat utilities like bg-repeat-x
    backgroundSize: true, //	The background-size utilities like bg-cover
    borderCollapse: false, //	The border-collapse utilities like border-collapse
    borderColor: true, //	The border-color utilities like border-green-700
    borderOpacity: true, //	The border-color opacity utilities like border-opacity-25
    borderRadius: true, //	The border-radius utilities like rounded-l-3xl
    borderStyle: true, //	The border-style utilities like border-dotted
    borderWidth: true, //	The border-width utilities like border-l-2
    boxShadow: true, //	The box-shadow utilities like shadow-lg
    boxSizing: false, //	The box-sizing utilities like box-border
    clear: false, //	The clear utilities like clear-right
    cursor: true, //	The cursor utilities like cursor-wait
    display: true, //	The display utilities like table-column-group
    divideColor: false, //	The between elements border-color utilities like divide-gray-500
    divideOpacity: false, //	The divide-opacity utilities like divide-opacity-50
    divideStyle: false, //	The divide-style utilities like divide-dotted
    divideWidth: false, //	The between elements border-width utilities like divide-x-2
    fill: false, //	The fill utilities like fill-current
    flex: true, //	The flex utilities like flex-auto
    flexDirection: true, //	The flex-direction utilities like flex-row-reverse
    flexGrow: true, //	The flex-grow utilities like flex-grow-0
    flexShrink: true, //	The flex-shrink utilities like flex-shrink-0
    flexWrap: true, //	The flex-wrap utilities like flex-wrap-reverse
    float: true, //	The float utilities like float-left
    fontFamily: true, //	The font-family utilities like font-serif
    fontSize: true, //	The font-size utilities like text-3xl
    fontSmoothing: false, //	The font-smoothing utilities like antialiased
    fontStyle: false, //	The font-style utilities like italic
    fontVariantNumeric: false, //	The font-variant-numeric utilities like lining-nums
    fontWeight: true, //	The font-weight utilities like font-medium
    gap: false, //	The gap utilities like gap-x-28
    gradientColorStops: true, //	The gradient-color-stops utilities like via-green-700
    gridAutoColumns: false, //	The grid-auto-columns utilities like auto-cols-min
    gridAutoFlow: false, //	The grid-auto-flow utilities like grid-flow-col
    gridAutoRows: false, //	The grid-auto-rows utilities like auto-rows-min
    gridColumn: false, //	The grid-column utilities like col-span-6
    gridColumnEnd: false, //	The grid-column-end utilities like col-end-7
    gridColumnStart: false, //	The grid-column-start utilities like col-start-7
    gridRow: false, //	The grid-row utilities like row-span-3
    gridRowEnd: false, //	The grid-row-end utilities like row-end-4
    gridRowStart: false, //	The grid-row-start utilities like row-start-4
    gridTemplateColumns: false, // The grid-template-columns utilities like grid-cols-7
    gridTemplateRows: false, // The grid-template-rows utilities like grid-rows-4
    height: true, //	The height utilities like h-64
    inset: true, //	The inset utilities like bottom-10
    justifyContent: true, //	The justify-content utilities like justify-center
    justifyItems: true, //	The justify-items utilities like justify-items-end
    justifySelf: true, //	The justify-self utilities like justify-self-end
    letterSpacing: false, //	The letter-spacing utilities like tracking-normal
    lineHeight: true, //	The line-height utilities like leading-9
    listStylePosition: false, //	The list-style-position utilities like list-inside
    listStyl: false, //eType	The list-style-type utilities like list-disc
    margin: true, //	The margin utilities like ml-8
    maxHeight: true, //	The max-height utilities like max-h-32
    maxWidth: true, //	The max-width utilities like max-w-5xl
    minHeight: true, //	The min-height utilities like min-h-full
    minWidth: true, //	The min-width utilities like min-w-full
    objectFit: false, //	The object-fit utilities like object-fill
    objectPosition: false, //	The object-position utilities like object-left-top
    opacity: true, //	The opacity utilities like opacity-50
    order: false, //	The order utilities like order-8
    outline: false, //	The outline utilities like outline-white
    overflow: false, //	The overflow utilities like overflow-y-auto
    overscrollBehavior: false, //	The overscroll-behavior utilities like overscroll-y-contain
    padding: true, //	The padding utilities like pr-4
    placeContent: false, //	The place-content utilities like place-content-between
    placeholderColor: false, //	The placeholder color utilities like placeholder-red-600
    placeholderOpacity: false, //	The placeholder color opacity utilities like placeholder-opacity-25
    placeItems: false, //	The place-items utilities like place-items-end
    placeSelf: false, //	The place-self utilities like place-self-end
    pointerEvents: false, //	The pointer-events utilities like pointer-events-none
    position: true, //	The position utilities like absolute
    resize: false, //	The resize utilities like resize-y
    ringColor: false, //	The ring-color utilities like ring-green-700
    ringOffsetColor: false, //	The ring-offset-color utilities like ring-offset-green-700
    ringOffsetWidth: false, //	The ring-offset-width utilities like ring-offset-2
    ringOpacity: false, //	The ring-opacity utilities like ring-opacity-50
    ringWidth: false, //	The ring-width utilities like ring-2
    rotate: false, //	The rotate utilities like rotate-180
    scale: false, //	The scale utilities like scale-x-95
    skew: false, //	The skew utilities like -skew-x-1
    space: false, //	The "space-between" utilities like space-x-4
    stroke: false, //	The stroke utilities like stroke-current
    strokeWidth: false, //	The stroke-width utilities like stroke-1
    tableLayout: false, //	The table-layout utilities like table-auto
    textAlign: true, //	The text-align utilities like text-center
    textColor: true, //	The text-color utilities like text-green-700
    textDecoration: false, //	The text-decoration utilities like line-through
    textOpacity: false, //	The text-opacity utilities like text-opacity-50
    textOverflow: false, //	The text-overflow utilities like overflow-ellipsis
    textTransform: false, // The text-transform utilities like lowercase
    transform: true, //	The transform utility (for enabling transform features)
    transformOrigin: false, //	The transform-origin utilities like origin-bottom-right
    transitionDelay: true, //	The transition-delay utilities like delay-200
    transitionDuration: true, //	The transition-duration utilities like duration-200
    transitionProperty: true, //	The transition-property utilities like transition-colors
    transitionTimingFunction: true, // The transition-timing-function utilities like ease-in
    translate: false, //	The translate utilities like -translate-x-full
    userSelect: false, //	The user-select utilities like select-text
    verticalAlign: false, //	The vertical-align utilities like align-middle
    visibility: false, //	The visibility utilities like visible
    whitespace: false, //	The whitespace utilities like whitespace-pre
    width: true, //	The width utilities like w-0.5
    wordBreak: false, //	The word-break utilities like break-words
    zIndex: false,
  },
};
