import * as React from 'react';
import { css } from 'emotion';

class MobilePopup extends React.Component<any, any> {
  detailsRef: React.RefObject<HTMLInputElement> = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (event: MouseEvent) => {
    if (
      this.detailsRef.current &&
      !this.detailsRef.current.contains(event.target as Node)
    ) {
      this.detailsRef.current.removeAttribute('open');
    }
  };

  render() {
    return (
      <details
        ref={this.detailsRef}
        className={css`
          width: 100%;
          justify-self: end;
          text-align: right;
          font-size: 2rem;
          @media (min-width: 940px) {
            display: none;
          }
        `}
      >
        <summary
          className={css`
            font-size: 1rem;
            ::-webkit-details-marker {
              display: none;
            }
          `}
        >
          🍔
        </summary>
        <nav
          className={css`
            display: grid;
            grid-template-columns: 1fr;
          `}
        >
          {this.props.children}
        </nav>
      </details>
    );
  }
}

export default MobilePopup;
