/**
 * 组装树状结构的数据
 * @param data
 * @param parentId
 * @return
 */
export const toTreeData = (data: any[], parentId = 0) => {
  if (data.length <= 0) return []
  function traverse(id: number | string) {
    const res = []
    const items = data.filter((item) => item.parentId === id)
    if (items.length <= 0) return null
    items.forEach((item) => {
      const newItem: Record<string, any> = { ...item }
      const children = traverse(item.id)
      if (children && children.length) newItem.children = children
      res.push(newItem)
    })
    return res
  }
  return traverse(parentId)
}
