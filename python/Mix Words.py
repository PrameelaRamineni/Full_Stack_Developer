#input: Welcome to your first problem
#output:Wtyfp eooir luro crsb otl me em

word=input().split()
max_len=max([len(i) for i in word])

res=[""]*max_len

for i in range(max_len):
    for w in word:
        if len(w) > i:
            res[i]+=w[i]
print(" ".join(res))            