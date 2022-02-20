import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdLocalFireDepartment as icon } from 'react-icons/md';
import storeSettings from './schemas/storeSettings';

// building a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>{icon}</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== storeSettings
      ),
    ]);
}
