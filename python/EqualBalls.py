def max_balls(N, pole_heights):
    max_balls = 0
    for i in range(N):
        for j in range(i+1, N):
            balls = min(pole_heights[i], pole_heights[j]) * (j - i)
            max_balls = max(max_balls, balls)
    return max_balls

# Input reading
N = int(input())
pole_heights = list(map(int, input().split()))

# Output
result = max_balls(N, pole_heights)
print(result)