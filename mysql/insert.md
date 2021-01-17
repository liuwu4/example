### 插入

#### 插入的输入如果存在则执行更新操作(`ON DUPLICATE KEY UPDATE`)

```sql
    INSERT INTO table_name(column1, column2.....)
    VALUES(value1, value2....)
    ON DUPLICATE KEY UPDATE
    column_name= VALUES(column_name);
```
