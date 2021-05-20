// TODO: fix eslint errors - Remove below comments and fix the linting errors
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
export default function Footer() {
  return (
    <div className="pl-5 pr-5 pt-2 pb-2 flex justify-between bg-secondary">
      <span className="mt-auto mb-auto flex flex-col">
        <a href="/terms" target="_blank">
          Terms
        </a>
        <a href="/privacy" target="_blank">
          Privacy Policy
        </a>
      </span>
      <span className="flex flex-row">
        <div className="bg-sprite-background bg-no-repeat" style={{ width: 60, height: 60 }} />
        <a href="https://www.facebook.com/wallora/" target="_blank" rel="noreferrer">
          <div
            className="bg-sprite-background bg-no-repeat"
            style={{ width: 56, height: 55, backgroundPositionX: -60 }}
          />
        </a>
        <a href="https://twitter.com/WalloraInc" target="_blank" rel="noreferrer">
          <div
            className="bg-sprite-background bg-no-repeat"
            style={{ width: 56, height: 55, backgroundPositionX: -118 }}
          />
        </a>
        <a href="https://plus.google.com/115182973503232931446" target="_blank" rel="noreferrer">
          <div
            className="bg-sprite-background bg-no-repeat"
            style={{ width: 56, height: 55, backgroundPositionX: -176 }}
          />
        </a>
        <a href="https://www.linkedin.com/company/wallora/about/" target="_blank" rel="noreferrer">
          <div
            className="bg-sprite-background bg-no-repeat"
            style={{ width: 56, height: 55, backgroundPositionX: -234 }}
          />
        </a>
        <a href="https://in.pinterest.com/WalloraInc/" target="_blank" rel="noreferrer">
          <div
            className="bg-sprite-background bg-no-repeat"
            style={{ width: 56, height: 55, backgroundPositionX: -292 }}
          />
        </a>
      </span>
    </div>
  )
}
