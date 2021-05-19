/*	-------------------------------------------
	Proyect: authentication app
	Objetive: create the api-token collection
	Developer: Juan Sebastián Gómez
	Fecha: 19/05/2021
-------------------------------------------*/

db.createCollection("api-keys",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "_id", "token", "scopes"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId",
            description: "Document ID. Must be a ObjectID and is required"
          },
          token: {
            bsonType: "string",
            description: "token auth0. Must be a string and is required"
          },
          scopes: {
            bsonType: "array",
            description: "user scopes. Must be an array and is required"
          },
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error",
  });
  
  db["user"].createIndex( { "token": 1}, { name: "token_unique", collation: {locale: "en", strength: 2}, unique: true } )
  
  