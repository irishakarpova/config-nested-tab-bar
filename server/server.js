const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');


const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const menu = [
	{
		id: 1,
		parentId: 0,
		label: 'Affiliates'
	},
	{
		id: 2,
		parentId: 0,
		label: 'Marketing tools'
	},
	{
		id: 3,
		parentId: 0,
		label: 'System'
	},
	{
		id: 904,
		parentId: 1,
		label: 'Affiliates'
	},
	{
		id: 905,
		parentId: 1,
		label: 'Report'
	},
	{
		id: 906,
		parentId: 1,
		label: 'Support requests'
	},
	{
		id: 907,
		parentId: 1,
		label: 'New Requests'
	},
	{
		id: 908,
		parentId: 1,
		label: 'Affiliate Login Report'
	},
	{
		id: 909,
		parentId: 1,
		label: 'Manage Pixel Tracking'
	},
	{
		id: 910,
		parentId: 1,
		label: 'Affiliate Earnings'
	},
	{
		id: 911,
		parentId: 1,
		label: 'Pending Payments'
	},
	{
		id: 912,
		parentId: 1,
		label: 'Affiliate Payments'
	},
	{
		id: 913,
		parentId: 1,
		label: 'Data Entry'
	},
	{
		id: 915,
		parentId: 1,
		label: 'Affiliate Database'
	},
	{
		id: 916,
		parentId: 1,
		label: 'External Cost'
	},
	{
		id: 917,
		parentId: 2,
		label: 'Banners'
	},
	{
		id: 918,
		parentId: 2,
		label: 'Logos'
	},
	{
		id: 919,
		parentId: 2,
		label: 'Mailers'
	},
	{
		id: 920,
		parentId: 2,
		label: 'Free Games'
	},
	{
		id: 921,
		parentId: 2,
		label: 'Bonus Categories'
	},
	{
		id: 922,
		parentId: 3,
		label: 'Contact Web Site'
	},
	{
		id: 923,
		parentId: 3,
		label: 'Managers'
	},
	{
		id: 924,
		parentId: 3,
		label: 'Brands'
	},
	{
		id: 925,
		parentId: 3,
		label: 'Landing Pages'
	},
	{
		id: 926,
		parentId: 3,
		label: 'Affiliate Domains'
	},
	{
		id: 927,
		parentId: 3,
		label: 'Affiliate Domains rules'
	},
	{
		id: 928,
		parentId: 3,
		label: 'Email Templates'
	},
	{
		id: 929,
		parentId: 3,
		label: 'Positions'
	},
	{
		id: 930,
		parentId: 3,
		label: 'Cashe Queve'
	},
	{
		id: 931,
		parentId: 3,
		label: 'User Checker Queve'
	},
	{
		id: 932,
		parentId: 3,
		label: 'Setup'
	},
	{
		id: 933,
		parentId: 3,
		label: 'Help Hints'
	},
	{
		id: 934,
		parentId: 3,
		label: 'News'
	},
]

const root = {
	getMenu: () => {
		return menu;
	},
};

const app = express();

const whitelist = ['192.168.0.', 'localhost', '127.0.0.']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors());
app.options('*', cors(corsOptions));

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(8008);

console.log('Running a GraphQL API server at http://localhost:8008/graphql');
