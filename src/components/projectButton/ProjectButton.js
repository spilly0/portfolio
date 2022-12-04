
function ProjectButton(props) {
  console.log(props)
  return (
    <a href={props.link}>
      <button type="button" className="hover:bg-white hover:text-purple hover: px-3 py-3 rounded-lg bg-purple text-white border-[1px] border-purple mx-2">
        {props.title}
      </button>
    </a>
  )
}

export default ProjectButton
