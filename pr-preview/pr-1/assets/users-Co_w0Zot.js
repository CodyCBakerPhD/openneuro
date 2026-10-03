import{d as s,k as T,q as v,f as m}from"./index-B3fRTVAC.js";const $=m`
  fragment userFields on User {
    id
    name
    admin
    blocked
    email
    provider
    lastSeen
    created
    avatar
    github
    institution
    location
    modified
    orcid
  }
`,O=m`
  query GetUsers(
    $orderBy: [UserSortInput!]
    $isAdmin: Boolean
    $isBlocked: Boolean
    $search: String
    $limit: Int
    $offset: Int
  ) {
    users(
      orderBy: $orderBy
      isAdmin: $isAdmin
      isBlocked: $isBlocked
      search: $search
      limit: $limit
      offset: $offset
    ) {
      users {
        ...userFields
      }
      totalCount
    }
  }
  ${$}
`,N=m`
  mutation SetAdmin($id: ID!, $admin: Boolean!) {
    setAdmin(id: $id, admin: $admin) {
      ...userFields
    }
  }
  ${$}
`,_=m`
  mutation SetBlocked($id: ID!, $blocked: Boolean!) {
    setBlocked(id: $id, blocked: $blocked) {
      ...userFields
    }
  }
  ${$}
`,M=(e={})=>{const[t]=s.useState(e.initialLimit||100),[B,k]=s.useState(0),r=s.useRef({orderBy:e.orderBy?.field?[{field:e.orderBy.field,order:e.orderBy.order}]:void 0,search:e.search,isAdmin:typeof e.isAdmin=="boolean"?e.isAdmin:void 0,isBlocked:typeof e.isBlocked=="boolean"?e.isBlocked:void 0});s.useEffect(()=>{r.current={orderBy:e.orderBy?.field?[{field:e.orderBy.field,order:e.orderBy.order}]:void 0,search:e.search,isAdmin:typeof e.isAdmin=="boolean"?e.isAdmin:void 0,isBlocked:typeof e.isBlocked=="boolean"?e.isBlocked:void 0},k(0)},[e.orderBy,e.search,e.isAdmin,e.isBlocked]);const{data:o,loading:n,error:c,fetchMore:S,refetch:l}=T(O,{variables:{...r.current,limit:t,offset:B},notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-and-network"}),[i,b]=s.useState([]);s.useEffect(()=>{o?.users?.users&&b(B===0?o.users.users:d=>{const a=o.users.users.filter(y=>!d.some(f=>f.id===y.id));return[...d,...a]})},[o?.users?.users,B]);const A=o?.users?.totalCount||0,h=A>i.length||n,g=s.useCallback(()=>{if(h&&!n){const d=i.length;S({variables:{...r.current,offset:d,limit:t},updateQuery:(u,{fetchMoreResult:a})=>{if(!a)return u;const y=a.users.users,f=u.users?.users||[],C=f.concat(y.filter(w=>!f.some(I=>I.id===w.id)));return{users:{...u.users,users:C,totalCount:a.users.totalCount}}}})}},[i.length,h,n,S,t,r]),U=s.useCallback(async d=>{k(0),await l({...r.current,...d,offset:0,limit:t})},[l,r,t]),E=s.useCallback(async()=>{await l({...r.current,offset:0,limit:i.length>0?i.length:t})},[l,r,i.length,t]);return s.useEffect(()=>{c&&v(c)},[c]),{users:i,loading:n,error:c,refetchFullList:U,refetchCurrentPage:E,loadMore:g,hasMore:h,totalCount:A,currentLimit:t,currentOffset:i.length,filterSortSearchVariables:r.current}};export{N as S,_ as a,M as u};
//# sourceMappingURL=users-Co_w0Zot.js.map
