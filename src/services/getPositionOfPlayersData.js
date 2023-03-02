import PlayerSchema from '../models/player.js';

export default async function getPositionOfPalyers(position, page, limit) {
  return PlayerSchema.aggregate(buildQuery(position, page, limit));
}

const buildQuery = (position, page, limit) => {
  return [
    {
      '$match': {
        'rol.rolName': position
      }
    }, {
      '$group': {
        '_id': '$idEquipo',
        'jugadores': {
          '$addToSet': '$$ROOT'
        }
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }, {
      '$facet': {
        'data': [
          {
            '$skip': (Number(page) - 1) * limit
          }, {
            '$limit': limit
          }
        ],
        'metadata': [
          {
            '$count': 'totalDeElementos'
          }, {
            '$addFields': {
              'pagina': page
            }
          }
        ]
      }
    }
  ]
};