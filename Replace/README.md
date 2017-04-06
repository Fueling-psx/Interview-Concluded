### 问题题描述 ##
为字符串实现一个render方法，实现下面的变量替换功能
<pre><code>var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}';
var employee = {
    name: 'XiaoMing',
    age: 11,
    job: {
        jobName: 'designer',
        jobLevel: 'senior',
    }
};
var result = greeting.render(employee);
console.log(result);  // My name is XiaoMing, age 11, I am a designer
</code></pre>
**要求**  
上述字符串和employee对象均为render方法的示例，实现时不能仅仅考虑上述情况，要具备通用性  
在使用对象属性替换字符串中的变量占位符时，要具备通过点语法解析对象字属性的能力，层级不大于2级
当对应数据对象中没有占位符所要求的值时，保留占位符不变，并在console中输出警告信息
