---
group:
  title: State
  order: 1

toc: content
order: 1
---

# useCookie

## 描述

cookie 简便操作

## 演示


```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useCookie } from 'heitu-hook';

export default () => {
  const defaultOption = {
    path: "/",
  };
  const cookieName = "cookie-key";
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    "default-value",
  );

  const updateButtonClick = () => {
    updateCookie("new-cookie-value");
  };

  const deleteButtonClick = () => {
    updateCookie(undefined);
  };

  const change = () => {
    if ("cookieStore" in window) {
      const store = window.cookieStore as any;
      store.set({ name: cookieName, value: "changed" });
    }
    else {
      document.cookie = `${cookieName}=changed; path=/`;
    }
  };

  return (
    <div>
      <p>Click on the button to update or clear the cookie</p>
      <p color="blue">cookie: {cookieValue || "no value"}</p>
      <button onClick={updateButtonClick}>Update the cookie</button>
      <button onClick={deleteButtonClick}>Clear the cookie</button>
      <button onClick={change}>
        Changing the cookie through other methods
      </button>
      <button onClick={refreshCookie}>Refresh the cookie</button>
    </div>
  );
};
```

## Arguments

| name    | description              | type                     | default                                        |
|---------|--------------------------|--------------------------|------------------------------------------------|


## return

| name      | description              | type                                     | default |
|-----------|--------------------------|------------------------------------------|---------|