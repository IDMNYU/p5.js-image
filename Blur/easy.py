# -*- coding: utf-8 -*-
# @Author: Paolla
# @Date:   2019-07-15 17:32:00
# @Last Modified by:   Paolla
# @Last Modified time: 2019-07-15 18:09:14

code = "<code> </code>"


f = open("code.txt", "r")
new_f = open("update.txt", "w+")

for sline in f:
	lst = line.split()
	lst.insert(0, code)
	lst.append("\n")
	lst2 = ' '.join(lst)
	new_f.write(str(lst2))

f.close()
new_f.close()
