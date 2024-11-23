import type { Schema, Struct } from '@strapi/strapi';

export interface BasicContents extends Struct.ComponentSchema {
  collectionName: 'content-sections';
  info: {
    displayName: 'Content';
    pluralName: 'content-sections';
    singularName: 'content-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    period: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.contents': BasicContents;
    }
  }
}
