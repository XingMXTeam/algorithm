// Source : https://oj.leetcode.com/problems/simplify-path/

/**
 *
 *  /home/  ->   /home
 *  /a/./b/../../c/  -> /c
 * 
 *  边界情况：
 *    
 *  /../ -> / 
 *  /home//foo/ -> /home/foo
 * 
 */


#include <iostream>
#include <string>
#include <vector>
#include <sstream>
using namespace std;

// 注意返回指针 必须加上&
vector<string> &split(const string &s, char delim, vector<string> &elems) {
  // 转为流	
  stringstream ss(s);
  string item;
  // 从ss中读取一行到item
  while(getline(ss, item, delim)) {
  	// 采用倒着存储：/a/./b/b/../../c/ -> ["c", "..", "..", "b", "b", ".", "a"]
	elems.push_back(item);
  }
  return elems;
}

/**
 * 划分字符串
 */
vector<string> split(const string &s, char delim) {
	vector<string> elems;
	split(s, delim, elems);
	return elems;
}

string simplifyPath(string path) {
	string result;
	// 先划分
	vector<string> elems = split(path, '/');
	int ignore = 0;
	// 再遍历每个路径
	for(int i=elems.size()-1; i>=0; i--) {
		/// 如果是空或者. 忽略该路径
		if(elems[i]==""||elems[i]==".") {
			continue;
		}
		// 如果是.. 记录下次数
		if(elems[i]=="..") {
			ignore++;
			continue;
		}
		// 处理了..情况
		// 当遇到b这样的路径时，如果前面有..，则忽略这个路径(因为是倒着存储)
		if(ignore>0) {
			ignore--;
			continue;
		}
		// 拼接结果
		if(result.size()==0) {
			result = "/" + elems[i];
		} 
		// 注意拼接方式
		else {
			result = "/" + elems[i] + result;
		}
	}
	return result.size() ? result : "/";
}

int main(int argc, char** argv) {
	string path("/a/./b/../../c/");
	if(argc>1) {
		path = argv[1];
	}
	cout << path << " : " << simplifyPath(path) << endl;
}