/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by ForgeSDK Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk ForgeSDK configuration

  // this this callback URL when creating your client ID and secret
  callbackURL: process.env.FORGE_CALLBACK_URL || 'https://forgebom.herokuapp.com/api/forge/callback/oauth',

  // set enviroment variables or hard-code here
  credentials: {
    client_id: '3SvBu76Gjfu9WSfxZX0kcSiGoVdhDUgn',
    client_secret: 'HPsL8ATflWKooq2d',
  },

  // Required scopes for your application on server-side
  scopeInternal: ['data:read', 'data:write', 'data:create', 'data:search', 'bucket:create', 'bucket:read', 'bucket:update', 'bucket:delete'],
  // Required scope of the token sent to the client
  scopePublic: ['data:read'],

  // google configuration
  google: {
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'https://forgebom.herokuapp.com/api/google/callback/oauth',
    credentials: {
      client_id: '174560695407-jghoc7nks0phhn4gnvddidan05bsn47t.apps.googleusercontent.com',
      client_secret: 'GBJU7kvHNLC3DI0o6XPFS9uvset'
    }
  }
};