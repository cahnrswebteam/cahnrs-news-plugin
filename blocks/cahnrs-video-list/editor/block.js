const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("cahnrs/video-list", {
  title: "CAHNRS Video List",
  icon: "groups",
  category: "cahnrs",
  attributes: {
    count: {
      type: "string",
      default: "10",
    },
    page: {
      type: "string",
      default: "1",
    },
    tag: {
      type: "array",
      default: [],
    },
    columns: {
      type: "integer",
      default: 3,
    },
    headingTag: {
      type: "string",
      default: "h2",
    },
    headingTag: {
        type: 'string',
        default: 'h3',
    },
    taxonomy: {
        type: 'string',
        default: 'category',
    },
    termsSelected: {
        type: 'array',
        default: [],
    },
    terms: {
        type: 'string',
        default: '',
    },
    queryTerms: {
        type: 'array',
        default: [],
    },
    count: {
        type: 'string',
        default: '3',
    },
    offset: {
        type: 'string',
        default: '0',
    },
    host: {
        type: 'string',
        default: '',
    },
    postIn: {
        type: 'string',
        default: '',
    },
    useAndLogic: {
        type: 'boolean',
        default: false,
    },
  },
  edit: Edit,
  save: function () {
    return null;
  },
});
