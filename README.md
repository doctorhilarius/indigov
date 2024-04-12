# Indigov Take Home - Platform Engineer

## Background

Indigov is a constituent management system that allows elected officials to manage their constituency.

When a newly elected official holds a town hall meeting, a digital tablet at the door
allows constituents to enter their contact information so that they can receive their 
elected official's newsletters and other comms.

Each constituent enters the following information about how they want to be contacted:

- email address (unique)
- first, middle (optional), and last names
- address street, city, state, and zip
- phone (optional)
- date updated -- sign-up time

## Application

This MVP of this service allows officials to:

1. List all the constituents that are currently in the system
2. Submit new constituent contact data
> Duplicate data will overwrite existing data
3. Export a csv file of constituent contact data filtered by sign up (i.e. date updated) time

A fast-follow release should prioritize the following:

- Require admin authorization in order to open the app
- Require constituents to verify their email addresses in order to add/update their info
- Save contact info history and event attended
- Caching contact info
- Input regex validation for form inputs
- Input validation for API
- create PWA manifest
- Datepicker for download form
- Add search, sort, and/or filter functionality to the list of constituents in the system
- Add the ability to upload CSVs of contact data to the system

## Tech stack

### Database

The app currently uses MS SQL, but you can implement the DataStore interface to
use your preferred database.

> NOTE: A No SQL DB might a better solution for this app in a high volume scenario, it depends on what type of reporting we need (i.e. access patterns).

To set up the SQL table, run the following query:

```
USE [database]
GO

IF OBJECT_ID(N'[database_user_name].constituent', N'U') IS NOT NULL
DROP TABLE constituent

-- TODO: add date created and modified
-- TODO: add email verification
-- TODO: separate emails addresses into their own table
CREATE TABLE constituent (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dateUpdated] NVARCHAR(64) NOT NULL,
	[email] NVARCHAR(320) NOT NULL,
	[firstName] NVARCHAR(MAX) NOT NULL,
	[lastName] NVARCHAR(MAX) NOT NULL,
	[middleName] NVARCHAR(MAX),
	[addressLine1] NVARCHAR(MAX) NOT NULL,
	[addressLine2] NVARCHAR(MAX),
	[city] NVARCHAR(MAX) NOT NULL,
	[state] NVARCHAR(MAX) NOT NULL,
	[zip] NVARCHAR(MAX) NOT NULL,
	[phone] NVARCHAR(25),
) ON [PRIMARY]
GO

IF OBJECT_ID(N'[database_user_name].index_consituent_email', N'U') IS NOT NULL
	DROP INDEX index_consituent_email ON [database_user_name].constituent
GO

CREATE INDEX index_consituent_email ON [database_user_name].constituent (email)
GO
```

The database configuration is defined in an `.env` file, an example for which is available at [./env-example](env-example).

### REST API

This API uses the following:

- Express 4
- Node 20.12.2
- TypeScript 5.4.3

The API is defined in [./app.ts](app.ts).

All the API source code is in the [`./server`](server/) directory.

New API paths should be added in [./server/lib/config.ts](server/lib/config.ts) and in the `routes` function of [./server/lib/server.ts](server/lib/server.ts).

### Front End

This application uses the following:

- React 18.20.2
- TypeScript 4.9.5
> NOTE: react-scripts doesn't support TypeScript 5+
- react-csv 2
- react-hook-form 

All the FE source code is in the [`/client`](client/) directory and the React Apps is defined in [./client/src/App.tsx](client/src/App.tsx).

## Development

To run the API and FE, use the following commands in separate terminals:

```
% npm run api:start

```

```
% npm run ui:start

```

### Prettier

Set up to format on save or run manually:

```
% npm run pretty
```
