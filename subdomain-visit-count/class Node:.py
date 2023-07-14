class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root = Node(5)
root.left = Node(4)
root.right = Node(3)
root.left.left = Node(1)
root.left.right = Node(2)
root.right.left = Node(6)
root.right.right = Node(7)


def dfs_pre_order(node):
    if not node:
        return
    print(node.val)
    dfs_pre_order(node.left)
    dfs_pre_order(node.right)


def dfs_in_order(node):
    if not node:
        return
    dfs_in_order(node.left)
    print(node.val)
    dfs_in_order(node.right)