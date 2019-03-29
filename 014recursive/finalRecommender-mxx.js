const finalRecommender = function(actorId) {
	let referId = select refer_id from [table] where actor_id = actorId;
	if(referId==null) {
		return actorId;
	}
	return finalRecommender(referId);
}