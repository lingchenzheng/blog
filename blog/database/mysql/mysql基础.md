---
icon: pen-to-square
date: 2023-08-26
category:
    - 数据库
tag:
    - 高效
    - 极客
---

# mysql 基础

## 基础命令

### 登录

```bash

mysql -uroot -p1234

```

-uroot 表示用户 root 登录，-u 与 root 之前可以有空格，也可以没空格
-p1234 表示密码 1234，可以-p 回车后再输入密码

### 查询 mysql 所有数据库

```sql
show databases;
```

### 创建数据库

create database 数据库名;

```sql
# 创建名字test1的数据库
create database test1;
```

### 创建表

1、先选择某个数据库

use 数据库名;

```sql
use test1;
```

2、创建表

```sql
create table user(id int,name varchar(20));
```

3、查看表

```sql
show tables;
```

### 删除数据库

```sql
drop database test1;
```

## mysql5 编码设置

### 问题：插入中文报错

![](/assets/database/mysql/1.png)

mysql5 默认使用的字符集示拉丁码，不支持中文

### 解决问题

#### 查看编码

```sql
show variables like 'character_%';
```

![](/assets/database/mysql/2.png)

当我们创建数据库时如果没有指定字符集，就默认使用上图的字符集。

#### 修改默认编码

打开 my.ini 文件

1、找到`[mysql]`标识，设置默认编码

![](/assets/database/mysql/3.png)

2、找到`[mysqld]`标识，设置默认编码

![](/assets/database/mysql/4.png)

3、重启 mysql 服务，重新登录
