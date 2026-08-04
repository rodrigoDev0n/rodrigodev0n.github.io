import { techKeys, techByKey, techColor } from './tech-badges.mjs';

const SKIP_TAGS = new Set(['code', 'pre', 'a', 'script', 'style', 'svg']);
const MATCH = new RegExp(
  `\\b(${techKeys.map(escapeRegExp).join('|')})\\b`,
  'gi'
);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function text(value) {
  return { type: 'text', value };
}

function techBadge(tech, label) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['tech-badge'],
      style: `--tech-color: #${techColor(tech.hex)}`,
      title: label,
    },
    children: [
      {
        type: 'element',
        tagName: 'svg',
        properties: { viewBox: '0 0 24 24', role: 'img', 'aria-hidden': 'true' },
        children: [
          { type: 'element', tagName: 'path', properties: { d: tech.path }, children: [] },
        ],
      },
      text(label),
    ],
  };
}

function transformTextNode(node) {
  const value = node.value ?? '';
  if (!value) return [node];

  const matches = [...value.matchAll(MATCH)];
  if (matches.length === 0) return [node];

  const nodes = [];
  let last = 0;
  for (const match of matches) {
    if (match.index > last) nodes.push(text(value.slice(last, match.index)));
    const label = match[0];
    const tech = techByKey[label.toLowerCase()];
    nodes.push(tech ? techBadge(tech, label) : text(label));
    last = match.index + label.length;
  }
  if (last < value.length) nodes.push(text(value.slice(last)));
  return nodes;
}

function transformChildren(children) {
  return children.flatMap((node) => {
    if (node.type === 'text') return transformTextNode(node);
    if (node.type === 'element') {
      if (!SKIP_TAGS.has(node.tagName)) node.children = transformChildren(node.children);
      return [node];
    }
    return [node];
  });
}

export default function rehypeTechBadges() {
  return (tree) => {
    tree.children = transformChildren(tree.children);
  };
}
