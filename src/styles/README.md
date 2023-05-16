# Style scss

## mixins

### textStyle

> 디자인 시스템에 의거하여 작성된 textStyle mixin 입니다.
> 뒤의 인자는 [디자인 시스템](https://www.figma.com/file/5VAWv8fWQqCwajLcqn7iwB/%EC%9C%84%EC%8A%A4%ED%84%B0%EB%94%94_2.0_Now?node-id=5948%3A4883)을 참고해주세요

**인자로 받는 값 (size, color(optional))**  
default는 **base(p)** 값이 됩니다.  
size 인자로는 **h1, h2, h3, h4, h5, base, footnote, caption, labelSm, labelMd** 가 들어 올 수 있습니다.  
color인자는 optional이며 필요시 color값을 넣어주시면 됩니다.

**사용 예**

```scss
.someH1 {
  @include textStyle(h1);
}
.someH1Colored {
  @include textStyle(h1, $base);
}
.someBaseText {
  @include textStyle;
}
```

### flexBox

> flex에서 써야 하는 3개 (`display` || `align-items` || `justify-conent`) 를 한줄에 사용하기 위해 만든 `Mixin`

**Name**

- flex(jc, ai)
- inlineFlex(jc, ai)
- columnFlex(jc, ai)

**인자로 받는 값**  
인자로 아무것도 넘겨주지 않을 시 **center, center 정렬**이 됩니다.  
인자로는 **start, end, between, around, stretch, center** 가 들어 올 수 있습니다.  
앞에 붙는 prefix는 빼고 사용해주세요!

```scss
$flexMap: (
  start: flex-start,
  end: flex-end,
  between: space-between,
  around: space-around,
  stretch: stretch,
  center: center,
);
```

**사용 예**

```scss
.someCenterFlex {
  @include flex;
}
.someStartFlex {
  @include flex(start, start);
}
.someSpaceBetweenFlex {
  @include flex(between, start);
}
```

### position

> position이 **absolute나 fixed**일 때 가운데 정렬을 해야 할 일이 많습니다.  
> 정렬을 쉽게 하기 위해 만든 Mixin이나, position은 absolute와 fixed만 사용 가능합니다.

**Name**

- posCenterX(positionType) :: x축 가운데 정렬
- posCenterY(positionType) :: y축 가운데 정렬
- posCenter(positionType) :: x,y축 가운데 정렬

**인자로 받는 값**  
position 값을 받습니다.  
position은 **absolute**와 **fixed**만 사용 가능합니다.

**사용 예**

```scss
.avatar.isActive::after {
  @include posCenter(absolute);
  // or @include posCenter;
  width: 26px;
  height: 26px;
  border: 2px solid $gray;
  border-radius: 50%;
}
```
