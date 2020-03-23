import React, { HTMLProps, ReactElement, CSSProperties } from 'react';
import LocalPropTypes from 'local-prop-types';
import PropTypes from 'prop-types';

interface Iterable<T> {
  readonly length: number;
  [index: number]: T;
}

function ArrayFromDOMList<T>(DOMList: Iterable<T>): T[] {
  return Array.prototype.slice.call(DOMList);
}

function iframeFromString(iframeString: string): HTMLIFrameElement {
  const doc = document.createElement('div');
  doc.innerHTML = iframeString;
  return doc.getElementsByTagName('iframe')[0];
}

interface AllowStringKey<T, K extends keyof T> {
  [K: string]: T[K];
}

type HTMLAllowStringKey = AllowStringKey<HTMLProps<HTMLElement>, keyof HTMLProps<HTMLElement>>;

function addAttributeToProps(props: HTMLAllowStringKey, attribute: Attr): HTMLAllowStringKey {
  props[attribute.name] = attribute.value;
  return props;
}

function propsFromList(attributes: Attr[]): HTMLProps<HTMLElement> {
  return attributes.reduce(addAttributeToProps, {});
}

type StyleAllowStringKey = AllowStringKey<CSSStyleDeclaration, keyof CSSStyleDeclaration>;

function styleObjectFromString(styleString: string): StyleAllowStringKey {
  const attributes = styleString.split(';');
  const style: StyleAllowStringKey = {};

  return attributes.reduce((styleAcc, attribute): StyleAllowStringKey => {
    const keyValue: string[] = attribute.split(/:(.+)/);
    const key = keyValue[0];
    const value = keyValue[1];
    if (key && value) styleAcc[key.trim()] = value.trim();
    return styleAcc;
  }, style);
}

type EmbedProps = {
  style?: CSSProperties;
  className?: string;
};

const Embed = ({
  children,
  style,
  className,
}: {
  children: string;
  style?: CSSProperties;
  className?: string;
}): ReactElement => {
  const iframe: HTMLElement = iframeFromString(children);
  const attributes = ArrayFromDOMList(iframe.attributes);
  const iframeStyle = styleObjectFromString(iframe.style.cssText);
  const iframeProps = propsFromList(attributes) as HTMLProps<HTMLIFrameElement>;
  const reactProps: EmbedProps = {};
  if (style !== undefined) reactProps.style = style;
  if (className !== undefined) reactProps.className = className;
  return <iframe {...iframeProps} style={iframeStyle} {...reactProps} />;
};

Embed.defaultProps = {
  style: undefined,
  className: undefined,
};

Embed.propTypes = {
  children: LocalPropTypes.children.isRequired,
  style: LocalPropTypes.style,
  className: PropTypes.string,
};

export default Embed;
