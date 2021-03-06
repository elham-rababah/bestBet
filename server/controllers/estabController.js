var Establishments = require('../config/db').Establishments;
var Votes = require('../config/db').Votes;

var getEstabsInZones = function(userId, zones) {
  // Find all establishmenents in zones, and include last 24 hours of votes for each trait,
  // plus lifetime votes by this user
  return Establishments.findAll({where: {zoneNumber: {$in:zones}},
                                 include: [{model: Votes,
                                            required: false, //Votes are not required
                                            attributes: ['userId', 'traitId', 'voteValue', 'time'],//Fields to include
                                            where: {time: {$gt: new Date()-60*60*1000}}},
                                            {model: Votes, //Include userVotes on estab object
                                             as: 'userVotes',
                                             required: false, //Votes are not required
                                             attributes: ['traitId', 'voteValue', 'time'],//Fields to include
                                             where: {userId: userId}}
                                          ]});
};

var getEstabZoneNumber = function(estId){
  return Establishments.findOne({where: {id: estId}, attributes: ['zoneNumber'], raw: true});
};


module.exports = {
  getEstabsInZones: getEstabsInZones,
  getEstabZoneNumber: getEstabZoneNumber
};
