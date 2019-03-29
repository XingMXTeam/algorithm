// dics保存所有的单词
// 因为20万个单词最多2M，完全可以用HashTable保存。
// 取的话只需要O(1)的时间复杂度
/**
* @param {Array} dics
* @param {String} word
* @return {Boolean} 是否拼写错误
*/
const spellChecker = function(dics, word) {
	// 是天然的散列表。帮忙解决了散列冲突问题。
	let map = {};
	dics.forEach(w=>{
		map[w.toLowerCase()] = true;
	});
	return dics[word.toLowerCase()];
}