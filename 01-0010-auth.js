/*	-------------------------------------------
	Proyect: authentication app
	Objetive: create the changelog collection
	Developer: Juan Sebastián Gómez
	Fecha: 15/02/2021
-------------------------------------------*/

db.createCollection("changelog",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [ "_id", "type", "collection", "recordid", "user", "schema_version"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId",
            description: "Document ID. Must be a ObjectID and is required"
          },
          type: {
            bsonType: "string",
            enum: [ "INSERT", "UPDATE", "DELETE"],
            description: "Command type. Can only be one of the enum values and is required"
          },
          collection: {
            bsonType: "string",
            description: "Modified collection. Must be a string and is required"
          },
          recordid: {
            bsonType: "objectId",
            description: "ID from modified document. Must be an ObjectId and is required"
          },
  
          olddocument: {
            bsonType: "object",
            description: "Old document before upgrade. Must be an object."
          },
          newdocument: {
            bsonType: "object",
            description: "New document with the files after upgrade. Must be an object"
          },
          user: {
            bsonType: "objectId",
            description: "FK _id collection user. Must be an ObjectId and is required"
          },
          schema_version: {
            bsonType: "string",
            description: "Current schema version. Must be a string and is required"
          },
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error",
  });
  